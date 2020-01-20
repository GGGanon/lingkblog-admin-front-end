import request from './index'

/**
 * 获取文章列表
 * @param page
 * @param limit
 * @param title
 * @param categoryId
 */
export function getArticleList(page, limit, title, categoryId) {
    return request({
        url: '/articles',
        method: 'get',
        params: {
            title: title,
            category_id: categoryId,
            page: page,
            limit: limit
        }
    })
}

/**
 * 获取文章详细信息
 * @param id
 */
export function getArticleDetail(id) {
    return request({
        url: `/articles/${id}`,
        method: 'get'
    });
}

/**
 * 获取文章详细信息
 * @param uid
 */
export function getArticleDetailByUid(uid) {
    return request({
        url: `/articles/${uid}`,
        method: 'get'
    });
}

/**
 * 发布文章
 * @param categoryId
 * @param content
 * @param contentMarkdown
 * @param contentType
 * @param summary
 * @param tags
 * @param title
 */
export function postArticle(categoryId, content, contentMarkdown, contentType, summary, tags, title) {
    return request({
        url: `/articles`,
        method: 'post',
        data: {
            category_id: categoryId,
            content: content,
            content_markdown: contentMarkdown,
            content_type: contentType,
            summary: summary,
            tags: tags,
            title: title
        }
    });
}

/**
 * 更新文章信息
 * @param id
 * @param categoryId
 * @param createdAt
 * @param status
 * @param summary
 * @param tags
 * @param title
 * @param contentType
 * @param content
 * @param contentMarkdown
 */
export function updateArticle(id, categoryId, createdAt, status, summary, tags, title, contentType, content, contentMarkdown) {
    return request({
        url: `/articles`,
        method: 'post',
        data: {
            id: id,
            category_id: categoryId,
            created_at: createdAt,
            status: status,
            summary: summary,
            tags: tags,
            title: title,
            content_type: contentType,
            content: content,
            content_markdown: contentMarkdown
        }
    });
}

export function updateArticleStatus(id, status) {
    return request({
        url: `/articles/${id}`,
        method: 'patch',
        data: {
            status: status,
        }
    });
}


export function deleteArticle(id) {
    return request({
        url: `/articles/${id}`,
        method: 'delete'
    });
}