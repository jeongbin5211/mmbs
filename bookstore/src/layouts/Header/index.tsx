import React, { useState } from 'react'
import { useUserStore } from '../../stores';
import { useCookies } from 'react-cookie';
import { create } from 'zustand';

// 로고
// 페이지명
// 로그인, 로그아웃

interface UserStore {
  user: any;
  setUser: (user: any) => void;
  removeUser: () => void;
}

const useStore = create<UserStore>()

export default function Header() {

  // 사용자 정보와 removeUser ㅎ마수를 useUserStore에서 가져오기.
  const { user, removeUser } = useUserStore();

  // react-cookie 라이브러리 사용: 쿠키에 대한 상태와 함수 가져오기.
  const [cookies, setCookies] = useCookies();

  // 로그아웃 핸들러
  const logOutHandler = () => {
    // 토큰 쿠키를 삭제
    setCookies('token', '', { expires: new Date() })
    // 사용자 정보를 제거
    removeUser();
  }

  // 드로어 메뉴 상태 관리
  // 드로어(슬라이딩 메뉴)의 상태를 관리하는 state
  const [state, setState] = useState({ right: false });

  // 드로어 메뉴 토글 핸들러
  const toggleDrawer = (open: boolean) => ( event: React.KeyboardEvent | React.MouseEvent) => {
    // 키보드의 'tab' 또는 'shift'키가 눌려있을 때는 드로어 토글을 하지 않도록 설정
    if (event.type === 'keydown' && (event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift') {
      return;
    }
    // 드로어 상태 변경
    setState({ right: open})
  }


  return (
    <div>Header</div>
  )
}