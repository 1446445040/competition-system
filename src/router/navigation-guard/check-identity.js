/**
 * 身份验证，防止不同身份的用户串门
 */
import store from '@/store';

export default function(to, from, next) {
  // 登录页面不做校验
  if (['/', '/404'].includes(to.path)) {
    return next();
  }
  const route = to.matched.find(item => item.meta.identity);
  const curIdentity = store.state.user.identity;
  const targetIdentity = route.meta.identity;
  // 当前登录身份与目标地址需要的身份不符，拒绝访问
  if (curIdentity !== targetIdentity) {
    next({ path: '/404' });
  } else {
    next();
  }
}
