export interface ResultDto<T> {
    success: boolean;
    data: T;
    message: string;
}