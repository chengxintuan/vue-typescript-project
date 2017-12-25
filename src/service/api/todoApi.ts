import { TodoDto, ResultDto } from 'model';

export class TodoApi {
    getData = (params?): Promise<ResultDto<TodoDto[]>> => {
        return new Promise((resolve) => {
            resolve({
                message: '获取数据成功！',
                data: [{
                    id: 1,
                    completed: false,
                    title: 'hello'
                }, {
                    id: 2,
                    completed: true,
                    title: 'todo'
                }],
                success: true
            })
        });
    }
}