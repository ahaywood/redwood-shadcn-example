import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { Calendar } from 'src/components/Calendar/Calendar'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1 className="text-red-500">HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>

      <Calendar />
    </>
  )
}

export default HomePage
