import Link from 'next/link'
import { Title } from '@/components/Title'
import { Button } from '@/components/ui/Button'
import { Loader } from '@/components/ui/Loader'

export default function Design() {
   return (
      <div className="flex justify-center">
         <div className="max-w-sm">
            <Title variant="h1" className="mt-8">
               Header 1 Title
            </Title>
            <p>
               This is the design system page for Terra. This page previews all
               of the custom UI components created for the app to make it easier
               to find, review and use them as needed.
            </p>
            <Title variant="h2" className="mt-4">
               Header 2 Title
            </Title>
            <Title variant="h3" className="mt-4">
               Header 3 Title
            </Title>
            <div className="my-8">
               <Link href="/design/buttons">
                  <a>
                     <Button variant="primary">See all Buttons</Button>
                  </a>
               </Link>
            </div>
            <Loader ratio={200} />
         </div>
      </div>
   )
}
