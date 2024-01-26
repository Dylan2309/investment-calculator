import logo from '../assets/Investment-Calculator-Logo.png'

export default function Header() {
    return <header id="header">
        <img src={logo} alt="logo" />
        <h1> Investment Calculater </h1>
    </header>
}