import Link from 'next/link'
import Layout from '../components/layout/Layout';
import useAuthCondition from '../hooks/useAuthCondition';

// export default function Home({holaMundo}) {
const Home = ({holaMundo}) => {
  return (
    <Layout title="Dashboard">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address {holaMundo}</label>
        <input type="email" className="form-control form-invalid" id="exampleFormControlInput1" placeholder="name@example.com" />
        <span className="invalid-feedback">Este es un error</span>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control-plaintext" id="exampleFormControlInput1" placeholder="name@example.com" disabled value="1231asdas" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>

      <button type="button" className="btn btn-link">Link</button>
      <br />
      
      <button type="button" className="btn btn-outline-primary">Primary</button>
      <button type="button" className="btn btn-outline-secondary">Secondary</button>
      <button type="button" className="btn btn-outline-success">Success</button>
      <button type="button" className="btn btn-outline-danger">Danger</button>
      <button type="button" className="btn btn-outline-warning">Warning</button>
      <button type="button" className="btn btn-outline-info">Info</button>
      <button type="button" className="btn btn-outline-light">Light</button>
      <button type="button" className="btn btn-outline-dark">Dark</button>

      <br />
      <Link href="/logout">
        <a>Logout</a>
      </Link>
    </Layout>
  )
}

// export async function getServerSideProps({ req, res }) {
//   try {
//     const Cookies = require('cookies')
//     const cookies = new Cookies(req, res)
//     const authToken = cookies.get('auth-token') || ''

//     if (authToken.length > 0) {
//       return {props: {holaMundo: 'Hola Mundo....'}}
//     } else {
//       return {props: {holaMundo: 'No.... Hola Mundo....'}}
//     }
//   } catch (err) {
//     return { initialLoginStatus: 'Not logged in' }
//   }
// }

export const getServerSideProps = useAuthCondition()

export default Home;
