import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fontSize from '../styles/FontSize';
const Header = () => {
  const HeaderBox = styled.header`
    .site-top {
      background: #f8f8f8;
      border-bottom: 1px solid #d5d5d5;
      height: 35px;
      div {
        text-align: right;
        a {
          display: inline-block;
          line-height: 34px;
          margin-left: 10px;
          font-size: ${fontSize.normal};
        }
      }
    }
  `;
  const { t } = useTranslation();
  return (
    <HeaderBox>
      <section className="site-top">
        <div className="layout-width">
          <Link to="/member/join">{t('회원가입')}</Link>
          <Link to="/member/login">{t('로그인')}</Link>
        </div>
      </section>
    </HeaderBox>
  );
};
export default React.memo(Header);
