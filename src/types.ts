
export interface Env {
	PROXY?: string,
	REWRITE_IN_PAGE_URL?: string,
}

export interface ExtendedUrl {
	url: URL,
	region: string | null,
	mobile: boolean,
}
