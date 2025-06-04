import Header from '@widgets/header/ui/Header'
import { Outlet } from 'react-router-dom'

function BaseLayout() {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default BaseLayout