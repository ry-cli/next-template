import { getDemoData } from '@/api/demoApi'

export interface IAdParam {
    params: {
        id: number
    }
}

export default async function AdPage({ params }: IAdParam) {
    const data = await getDemoData()
    return (
        <h1>
            宣传数据:{data[0].name},网页参数id为:{params.id}
        </h1>
    )
}
