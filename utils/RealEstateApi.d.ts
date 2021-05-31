declare class RealEstateApi {
    readonly baseUrl: string;
    readonly defaultHeaders: HeadersInit;
    constructor(options: {
        baseUrl: string;
    });
    private getHeaders;
    private get;
    private post;
    postData(url: string, options: {
        headers?: HeadersInit;
        body: unknown;
    }): Promise<Response>;
    getRealEstateData(url: string, options?: {
        headers?: HeadersInit;
    }): Promise<any>;
}
declare const realEstateApi: RealEstateApi;
export default realEstateApi;
