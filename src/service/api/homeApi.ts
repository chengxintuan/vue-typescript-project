import {HomeDto, ResultDto} from 'model';

export class HomeApi {
    getData = (params: {
        id: number;
    }): Promise<ResultDto<HomeDto[]>> => {
        return new Promise((resolve, reject) => {
            resolve({
                message: '获取数据成功！',
                data: [{
                    name: 'cxt',
                    age: 23,
                    sex: true
                }, {
                    name: 'sf',
                    age: 25,
                    sex: true
                }, {
                    name: 'cwp',
                    age: 26,
                    sex: true
                }, {
                    name: 'hdd',
                    age: 25,
                    sex: false
                }, {
                    name: 'cxx',
                    age: 28,
                    sex: false
                }],
                success: true
            })
        });
    }
}