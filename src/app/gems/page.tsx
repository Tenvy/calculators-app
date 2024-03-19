'use client'
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const Gems = () => {
    const [onHand, setOnHand] = useState<number>(0);
    const [x5, setX5] = useState<number>(0);
    const [x10, setX10] = useState<number>(0);
    const [x20, setX20] = useState<number>(0);
    const [x50, setX50] = useState<number>(0);
    const [x100, setX100] = useState<number>(0);
    const [x200, setX200] = useState<number>(0);
    const [x500, setX500] = useState<number>(0);
    const [x650, setX650] = useState<number>(0);
    const [x1000, setX1000] = useState<number>(0);
    const [x2000, setX2000] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const calculateTotal = (): void => {
        const totalValue = onHand + (x5 * 5) + (x10 * 10) + (x20 * 20) + (x50 * 50) + (x100 * 100) + (x200 * 200) + (x500 * 500) + (x650 * 650) + (x1000 * 1000) + (x2000 * 2000);
        setTotal(totalValue);
    };

    useEffect(() => {
        calculateTotal()
    }, [onHand, x5, x10, x20, x50, x100, x200, x500, x650, x1000, x2000])

    const handleOnHandChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = parseInt(e.target.value);
        if (isNaN(value) || e.target.value === "") {
            setOnHand(0);
        } else {
            setOnHand(value);
        }
        calculateTotal();
    };

    const handleOnHandKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Backspace' && onHand === 0) {
            setOnHand(0);
            calculateTotal();
        }
    };

    const handleMultiplierChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>): void => {
        const value = parseInt(e.target.value);
        if (isNaN(value) || e.target.value === "") {
            setter(0);
        } else {
            setter(value);
        }
        calculateTotal();
    };

    const handleMultiplierKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Backspace' && parseInt(e.currentTarget.value) === 0) {
            e.preventDefault();
        }
    };


    return (
        <div className="p-6">
            <div className="text-4xl font-bold mb-4">
                Gem Packs Calculator
            </div>
            <div>
                <div className="flex flex-wrap lg:max-w-xl flex-col gap-4">
                    <div className="flex items-center">
                        <label htmlFor="onHand">On Hand:</label>
                        <Input
                            type="number"
                            id="onHand"
                            onChange={handleOnHandChange}
                            onKeyDown={handleOnHandKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x5">x5:</label>
                        <Input
                            type="number"
                            id="x5"
                            onChange={(e) => handleMultiplierChange(e, setX5)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x10">x10:</label>
                        <Input
                            type="number"
                            id="x10"
                            onChange={(e) => handleMultiplierChange(e, setX10)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x20">x20:</label>
                        <Input
                            type="number"
                            id="x20"
                            onChange={(e) => handleMultiplierChange(e, setX20)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x50">x50:</label>
                        <Input
                            type="number"
                            id="x50"
                            onChange={(e) => handleMultiplierChange(e, setX50)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x100">x100:</label>
                        <Input
                            type="number"
                            id="x100"
                            onChange={(e) => handleMultiplierChange(e, setX100)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x200">x200:</label>
                        <Input
                            type="number"
                            id="x200"
                            onChange={(e) => handleMultiplierChange(e, setX200)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x500">x500:</label>
                        <Input
                            type="number"
                            id="x500"
                            onChange={(e) => handleMultiplierChange(e, setX500)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x650">x650:</label>
                        <Input
                            type="number"
                            id="x650"
                            onChange={(e) => handleMultiplierChange(e, setX650)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x1000">x1000:</label>
                        <Input
                            type="number"
                            id="x1000"
                            onChange={(e) => handleMultiplierChange(e, setX1000)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="x2000">x2000:</label>
                        <Input
                            type="number"
                            id="x2000"
                            onChange={(e) => handleMultiplierChange(e, setX2000)}
                            onKeyDown={handleMultiplierKeyDown}
                        />
                    </div>
                    <div className="text-xl">
                        Total: {!total ? 0 : total}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gems;
