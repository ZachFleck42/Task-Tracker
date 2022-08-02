import Button from './Button'

const Header = (props) => {
    const onClick = (e) => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>Hello {props.name}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header