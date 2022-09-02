import Link from 'next/link'
import { Layout } from '../../components/layout/Layout'
import { Title } from '../../components/Title'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'

export default function TOS() {
   return (
      <>
         <Title variant="h1" className="mt-24">
            Website Terms and Conditions of Use
         </Title>

         <Title variant="h2" className="mt-10">
            1. Terms
         </Title>

         <p className="mt-3">
            By accessing this Website, accessible from savemrterra.com, you are
            agreeing to be bound by these Website Terms and Conditions of Use
            and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trade mark law.
         </p>

         <Title variant="h2" className="mt-10">
            2. Use License
         </Title>

         <p className="mt-3">
            Permission is granted to temporarily download one copy of the
            materials on Terra's Website for personal, non-commercial transitory
            viewing only. This is the grant of a license, not a transfer of
            title, and under this license you may not:
         </p>

         <ul className="mb-8 mt-3 list-disc">
            <li className="ml-4">modify or copy the materials;</li>
            <li className="ml-4">
               use the materials for any commercial purpose or for any public
               display;
            </li>
            <li className="ml-4">
               attempt to reverse engineer any software contained on Terra's
               Website;
            </li>
            <li className="ml-4">
               remove any copyright or other proprietary notations from the
               materials; or
            </li>
            <li className="ml-4">
               transferring the materials to another person or "mirror" the
               materials on any other server.
            </li>
         </ul>

         <p className="mt-3">
            This will let Terra to terminate upon violations of any of these
            restrictions. Upon termination, your viewing right will also be
            terminated and you should destroy any downloaded materials in your
            possession whether it is printed or electronic format. These Terms
            of Service has been created with the help of the{' '}
            <a href="https://www.termsofservicegenerator.net">
               Terms Of Service Generator
            </a>
            .
         </p>

         <Title variant="h2" className="mt-10">
            3. Disclaimer
         </Title>

         <p className="mt-3">
            All the materials on Terra's Website are provided "as is". Terra
            makes no warranties, may it be expressed or implied, therefore
            negates all other warranties. Furthermore, Terra does not make any
            representations concerning the accuracy or reliability of the use of
            the materials on its Website or otherwise relating to such materials
            or any sites linked to this Website.
         </p>

         <Title variant="h2" className="mt-10">
            4. Limitations
         </Title>

         <p className="mt-3">
            Terra or its suppliers will not be hold accountable for any damages
            that will arise with the use or inability to use the materials on
            Terra's Website, even if Terra or an authorize representative of
            this Website has been notified, orally or written, of the
            possibility of such damage. Some jurisdiction does not allow
            limitations on implied warranties or limitations of liability for
            incidental damages, these limitations may not apply to you.
         </p>

         <Title variant="h2" className="mt-10">
            5. Revisions and Errata
         </Title>

         <p className="mt-3">
            The materials appearing on Terra's Website may include technical,
            typographical, or photographic errors. Terra will not promise that
            any of the materials in this Website are accurate, complete, or
            current. Terra may change the materials contained on its Website at
            any time without notice. Terra does not make any commitment to
            update the materials.
         </p>

         <Title variant="h2" className="mt-10">
            6. Links
         </Title>

         <p className="mt-3">
            Terra has not reviewed all of the sites linked to its Website and is
            not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by Terra of the
            site. The use of any linked website is at the user's own risk.
         </p>

         <Title variant="h2" className="mt-10">
            7. Site Terms of Use Modifications
         </Title>

         <p className="mt-3">
            Terra may revise these Terms of Use for its Website at any time
            without prior notice. By using this Website, you are agreeing to be
            bound by the current version of these Terms and Conditions of Use.
         </p>

         <Title variant="h2" className="mt-10">
            8. Your Privacy
         </Title>

         <p className="mt-3">
            Please read our{' '}
            <Link href="/about-us/privacypolicy">
               <a className="underline font-semibold">Privacy Policy.</a>
            </Link>
         </p>

         <Title variant="h2" className="mt-10">
            9. Governing Law
         </Title>

         <p className="mt-3">
            Any claim related to Terra's Website shall be governed by the laws
            of us without regards to its conflict of law provisions.
         </p>
      </>
   )
}

TOS.getLayout = function getLayout(page) {
   return (
      <>
         <Layout>
            <Header />
            {page}
            <Footer />
         </Layout>
      </>
   )
}
