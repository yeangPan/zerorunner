import request from '/@/utils/request';

export function useUiElementApi() {
  return {
    getList: (data: object) => {
      return request({
        url: '/uiPage/list',
        method: 'post',
        data,
      });
    },
    saveOrUpdate: (data: object) => {
      return request({
        url: '/uiPage/saveOrUpdate',
        method: 'post',
        data,
      });
    },
    deleted: (data: object) => {
      return request({
        url: '/uiPage/deleted',
        method: 'post',
        data,
      });
    },
  };
}
