import { useState } from 'react';
import type { ChangeEvent } from 'react';

export default function App() {
  // useState => Hooks
  // useState는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해줍니다.
  // => 이 함수가 호출되면 배열을 반환한다. => 첫 번째 요소는 상태값, 두 번째 요소는 상태를 설정하는 함수
  // useState 함수의 parameter에는 상태의 기본값을 넣어줍니다.

  // const [] = useState();
  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>('전수아');
  const [nickname, setNickname] = useState<string>('전따루');

  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <div>
      <p>
        현재 카운트 값은 <b>{value}</b>
      </p>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>

      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름: {name}</b>
        <b>닉네임: {nickname}</b>
      </div>
    </div>
  );
}
