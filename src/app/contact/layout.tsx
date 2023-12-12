import CommonHeader from '@/components/CommonHeader'
import CommonFooter from '@/components/CommonFooter'

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CommonHeader></CommonHeader>
            {children}
            <CommonFooter></CommonFooter>
        </>
    )
}
