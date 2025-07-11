import { useEffect, useState } from 'react';

function Effect() {
  // useEffect
  // useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook 입니다.

  // - 마운트가 될 때만 실행하고 싶을 때
  // useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고,
  // 업데이트 될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 빈 배열을 넣어주면 된다.

  // - 특정 값이 업데이트 될 때만 실행하고 싶을 때
  // useEffect를 사용할 때, 특정 값이 변경될 때만 호출하고 싶을 경우도 있다.
  // useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 됩니다.

  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    console.log('컴포넌트가 렌더링 될 때마다 특정 작업을 수행합니다.');
    console.log({ name, nickname });
  });

  useEffect(() => {
    console.log('마운트가 될 때만 수행합니다.');
    console.log({ name, nickname });
  }, []);

  useEffect(() => {
    console.log('name이라는 상태 값이 변할 경우에만 수행합니다.');
    console.log('updated name: ', { name });
  }, [name]);

  // * cleanup 복습 요망!
  useEffect(() => {
    console.log('뒷 정리하기');
    console.log('updated name: ', { name });

    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={onChangeName} />
      <input type="text" value={nickname} onChange={onChangNickname} />

      {visible && (
        <div>
          <b>이름 : {name}</b>
          <b>닉네임 : {nickname}</b>
        </div>
      )}

      <button
        onClick={() => {
          setVisible(!visible);
        }}>
        {visible ? '숨기기' : '보이기'}
      </button>
    </div>
  );
}

export default Effect;
