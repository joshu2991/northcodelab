import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ResumeViewer } from '@/components/ResumeViewer'

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ResumeViewer />
      <Footer />
    </main>
  )
}

