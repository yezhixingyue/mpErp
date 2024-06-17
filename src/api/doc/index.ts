import { instance } from '@/basic/request';
import { IArticle, IDocClass } from '@/views/OpenPlatform/DocManage/js/types';
import { docBaseURL as baseURL } from '@/config';

/** 文档管理项目接口 */
export const docApi = {
  /** 获取分类列表 GET /Api/Category/GetAl */
  getClassList() {
    return instance.get<IDocClass[]>('/Api/Category/GetAll', { baseURL });
  },
  /** 获取文章列表 GET /Api/Article/GetArticlesByCategory */
  getArticleList(CategoryID: number, Page: number, Limit: number) {
    return instance.get<IArticle[]>('/Api/Article/GetArticlesByCategory', { params: { CategoryID, Page, Limit }, baseURL });
  },
  /** 创建编辑文章分类 POST /Api/Category/SaveCategory */
  getCategorySaveCategory(params) {
    return instance.post<IDocClass>('/Api/Category/SaveCategory', null, { params, baseURL });
  },
  /** 删除文章分类 DELETE /Api/Category/DeleteCategory */
  getCategoryDeleteCategory(id: number) {
    return instance.delete('/Api/Category/DeleteCategory', { params: { id }, baseURL });
  },
  /** 上移下移 PUT /Api/Category/MoveCategory */
  getCategoryMoveCategory(id: number, direction: 1 | -1) {
    return instance.put('/Api/Category/MoveCategory', null, { params: { id, direction }, baseURL });
  },
  /** 移动到其他分类 PUT /Api/Category/MoveCategoryToParent */
  getCategoryMoveCategoryToParent(id: number, targetID: number) {
    return instance.put('/Api/Category/MoveCategoryToParent', null, { params: { id, targetID }, baseURL });
  },
  /** 文章保存  POST /Api/Article/SaveArticle */
  getArticleSaveArticle(data) {
    return instance.post<IArticle>('/Api/Article/SaveArticle', data, { baseURL });
  },
  /** 文章删除 DELETE /Api/Article/DeleteArticle */
  getArticleDeleteArticle(articleID: string) {
    return instance.delete('/Api/Article/DeleteArticle', { params: { articleID }, baseURL });
  },
  /** 文章移动次序 PUT /Api/Article/AdjustArticleOrder */
  getArticleAdjustArticleOrder(id: string, newOrder: number) {
    return instance.put('/Api/Article/AdjustArticleOrder', null, { params: { id, newOrder }, baseURL });
  },
  /** 文章移动其他分类 PUT /Api/Article/MoveArticleToCategory  */
  getArticleMoveArticleToCategory(id: string, targetCategoryID: number) {
    return instance.put('/Api/Article/MoveArticleToCategory', null, { params: { id, targetCategoryID }, baseURL });
  },
  /** 文章复制 POST /Api/Article/CopyArticle */
  getArticleCopyArticle(articleId: string, categoryId: number) {
    return instance.post('/Api/Article/CopyArticle', null, { params: { articleId, categoryId }, baseURL });
  },
  /** GET /Api/Log/GetArticleLogs 获取文章历史记录 */
  getLogGetArticleLogs(articleID: string, Page: number, Limit: number) {
    return instance.get('/Api/Log/GetArticleLogs', { params: { articleID, Page, Limit }, baseURL });
  },
  /** 图片上传 POST /Api/Article/UploadImage */
  getImgUpload(file: File) { // 图片上传
    const formData = new FormData();
    formData.append('file', file);
    return instance.post('/Api/Article/UploadImage', formData, { baseURL });
  },
};
