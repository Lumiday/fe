//
import AddBtn from '@/app/components/custom/common/AddBtn';
import { useState } from 'react';

type SideType = '신랑측' | '신부측';

interface AccountInfoType {
  holder: string;
  bank: string;
  accountNumber: string;
  easyTransfer: boolean;
}

interface AccountNumberFormProps {
  side: SideType;
}

export default function AccountNumberForm({ side }: AccountNumberFormProps) {
  const [accountInfo, setAccountInfo] = useState<AccountInfoType[]>([
    {
      holder: '',
      bank: '',
      accountNumber: '',
      easyTransfer: false,
    },
  ]);

  const handleAccountChange = <K extends keyof AccountInfoType>(
    index: number,
    key: K,
    value: AccountInfoType[K]
  ) => {
    setAccountInfo((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [key]: value } : item))
    );
  };

  const addAccount = () => {
    setAccountInfo((prev) => [
      ...prev,
      {
        holder: '',
        bank: '',
        accountNumber: '',
        easyTransfer: false,
      },
    ]);
  };

  const removeAccount = (index: number) => {
    setAccountInfo((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>{side} 계좌 정보</h3>
      {accountInfo.map((account, index) => (
        <div key={index}>
          <div className="flex items-center gap-2">
            <input type="text" value={side} readOnly />
            <button
              onClick={() => {
                removeAccount(index);
              }}
            >
              x
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <p>예금주</p>
            <input
              type="text"
              placeholder="예금주"
              name="holder"
              value={account.holder}
              onChange={(e) =>
                handleAccountChange(index, 'holder', e.target.value)
              }
            />
          </div>
          <div className="flex gap-2 items-center">
            <p>계좌정보</p>
            <input
              type="text"
              name="bank"
              placeholder="은행"
              value={account.bank}
              onChange={(e) =>
                handleAccountChange(index, 'bank', e.target.value)
              }
              className="border p-1 rounded flex-1"
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="계좌번호"
              value={account.accountNumber}
              onChange={(e) =>
                handleAccountChange(index, 'accountNumber', e.target.value)
              }
              className="border p-1 rounded flex-1"
            />
          </div>
          <div className="flex gap-2 items-center">
            <p className="w-24">간편 송금</p>
            <input
              type="checkbox"
              name="easyTransfer"
              checked={account.easyTransfer}
              onChange={(e) =>
                handleAccountChange(index, 'easyTransfer', e.target.checked)
              }
            />
            <span>카카오 페이</span>
          </div>
        </div>
      ))}
      <AddBtn onAdd={addAccount}>계좌 정보 추가</AddBtn>
    </div>
  );
}
