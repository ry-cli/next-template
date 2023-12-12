import CommonHeader from '@/components/CommonHeader'
import CommonFooter from '@/components/CommonFooter'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CommonHeader></CommonHeader>
            {children}
            你好home页面+layout
            <CommonFooter></CommonFooter>
        </>
    )
}
