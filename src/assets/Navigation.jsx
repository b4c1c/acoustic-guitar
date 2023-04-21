import { Icon } from '@iconify/react';

const Navigation = () => {
    return ( 
        <div className='naviga'>
            <header >
                <Icon className='icon' icon="game-icons:guitar-head" />
                <p>Acoustic Guitars</p>
                <Icon className='icon' icon="game-icons:guitar-head" />
            </header>
            <nav>
                <ul>
                    <li className="nav-item"><a href="#martin">Martin</a></li>
                    <li className="nav-item"><a href="#taylor">Taylor</a></li>
                    <li className="nav-item"><a href="#seagull">Seagull</a></li>
                    <li className="nav-item"><a href="#fender">Fender</a></li>
                    <li className="nav-item"><a href="#guild">Guild</a></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navigation;