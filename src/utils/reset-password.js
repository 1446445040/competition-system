import { message } from 'ant-design-vue';
import { resetPassword } from '@/api';

export default function(type, account) {
  const key = Date.now();
  const stopLoading = message.loading({
    key,
    content: '请稍后',
    duration: 0,
  });
  return resetPassword({
    type: type,
    account: account,
  }).then(() => {
    message.success({ content: '已重置', key });
  }).catch(() => {
    stopLoading();
  });
}
