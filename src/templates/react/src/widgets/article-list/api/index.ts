import { IArticle } from "@/entities/article/types"

import clientApi from "@/shared/api/base-api"
import { ApiKeys } from "@/shared/constants/api-keys"

export const getArticles = async (): Promise<IArticle[]> => {
	const response = await clientApi.get(`${ApiKeys.articles}`)
	return response.data
}
