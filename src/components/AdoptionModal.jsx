import React, { useState } from 'react';
import { X } from 'lucide-react';
import QRCode from 'qrcode.react';
import { predefinedAmounts, formatAmount, generateQRValue } from '../utils/payment';

const AdoptionModal = ({ mechanic, onClose }) => {
  const [step, setStep] = useState('amount'); // 'amount', 'qr', 'confirmation'
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const iban = 'CZ9355000000001234567890';

  const amount = selectedAmount || (customAmount ? parseInt(customAmount) : null);

  const handleGenerateQR = () => {
    if (amount && amount > 0) {
      setStep('qr');
    }
  };

  const handleConfirm = () => {
    setStep('confirmation');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Adoptuj {mechanic.nickname}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {step === 'amount' && (
            <div className="space-y-4">
              <p className="text-gray-700 font-semibold">Vyber částku pro adopci:</p>
              <div className="grid grid-cols-2 gap-3">
                {predefinedAmounts.map(amt => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded font-bold text-lg transition ${
                      selectedAmount === amt
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {formatAmount(amt)}
                  </button>
                ))}
              </div>
              <div className="border-t pt-4">
                <label className="block text-gray-700 font-semibold mb-2">Nebo zadej vlastní částku:</label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Např. 500"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleGenerateQR}
                disabled={!amount || amount <= 0}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-400 transition mt-4"
              >
                Vygenerovat QR kód
              </button>
            </div>
          )}

          {step === 'qr' && (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-gray-700 font-semibold mb-4">Převod: <span className="text-2xl text-blue-600">{formatAmount(amount)}</span></p>
                <div className="flex justify-center">
                  <QRCode
                    value={generateQRValue(amount, mechanic.id, `Adopce ${mechanic.nickname}`)}
                    size={200}
                    level="H"
                    includeMargin={true}
                  />
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded space-y-2">
                <h3 className="font-bold text-gray-800">Nebo proveď převod ručně:</h3>
                <div className="bg-white p-3 rounded border border-gray-300">
                  <p className="text-sm text-gray-600">IBAN:</p>
                  <p className="font-mono font-bold text-gray-800">{iban}</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-300">
                  <p className="text-sm text-gray-600">Částka:</p>
                  <p className="font-mono font-bold text-gray-800">{formatAmount(amount)} CZK</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-300">
                  <p className="text-sm text-gray-600">Poznámka (dobrovolná):</p>
                  <p className="font-mono font-bold text-gray-800">Adopce {mechanic.nickname}</p>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition"
              >
                Převod proveden ✓
              </button>
            </div>
          )}

          {step === 'confirmation' && (
            <div className="space-y-4 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-600">Děkujeme za podporu!</h3>
              <p className="text-gray-700">
                Adoptoval/a jsi {mechanic.nickname} za {formatAmount(amount)}
              </p>
              <div className="bg-blue-50 p-4 rounded text-sm text-gray-700">
                <p className="font-semibold mb-2">ℹ️ O tvých datech:</p>
                <p>Tvoje jméno a částka nejsou nikde veřejné. Jsou viditelné pouze, pokud si sám uložíš přezdívku do leaderboardu.</p>
              </div>
              <button
                onClick={onClose}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Zavřít
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdoptionModal;
