import { useState } from "react";
import './index.css'

export const MainCard = () => {
    const [value, setValue] = useState('');
    const [fromUnit, setFromUnit] = useState('px');
    const [toUnit, setToUnit] = useState('rem');
    const [convertedValue, setConvertedValue] = useState(null);
    const units = ['px', 'rem', 'em', 'in', 'pt', 'cm', 'mm', 'm', 'ft', 'yd',];

    const handleConvert = () => {
        let valueInPx;

        switch (fromUnit) {
            case 'px': valueInPx = parseFloat(value); break;
            case 'rem': valueInPx = parseFloat(value) * 16; break;
            case 'em': valueInPx = parseFloat(value) * 16; break;
            case 'in': valueInPx = parseFloat(value) * 96; break;
            case 'pt': valueInPx = parseFloat(value) * 1.3333; break;
            case 'cm': valueInPx = parseFloat(value) * 37.7953; break;
            case 'mm': valueInPx = parseFloat(value) * 3.77953; break;
            case 'm': valueInPx = parseFloat(value) * 3779.53; break;
            case 'ft': valueInPx = parseFloat(value) * 1152; break;
            case 'yd': valueInPx = parseFloat(value) * 3456; break;
            default: valueInPx = parseFloat(value);
        }

        let result;
        switch (toUnit) {
            case 'px': result = valueInPx; break;
            case 'rem': result = valueInPx / 16; break;
            case 'em': result = valueInPx / 16; break;
            case 'in': result = valueInPx / 96; break;
            case 'pt': result = valueInPx / 1.3333; break;
            case 'cm': result = valueInPx / 37.7953; break;
            case 'mm': result = valueInPx / 3.77953; break;
            case 'm': result = valueInPx / 3779.53; break;
            case 'ft': result = valueInPx / 1152; break;
            case 'yd': result = valueInPx / 3456; break;
            default: result = valueInPx;
        }

        setConvertedValue(result);
    };

    return (
        <div className="Card">

            <h2>Conversor de Unidades</h2>
            <div className="conversorSection">
                <p> Converter</p>
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="starInput">
                    <label>De:</label>
                    <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                        {units.map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="finalInput">
                    <label>Para:</label>
                    <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                        {units.map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
            <button onClick={handleConvert}>Converter</button>
            {!!convertedValue && (
                <div>
                    <h2>Resultado: {convertedValue} {toUnit}</h2>
                </div>
            )}
        </div>
    )
}

