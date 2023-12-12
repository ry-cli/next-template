import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
    return (
        <main>
            <div>
                <div className={(styles.content, styles.bg)}>首页内容区域！！！</div>
                <div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
                    </a>
                </div>
            </div>
        </main>
    )
}
