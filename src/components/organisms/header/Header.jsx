import './styles/header.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Label from '../../atoms/label/Label';
import { labelTypes } from '../../../constants';

function Header() {
    const navigate = useNavigate();

    const [labelType] = useState(labelTypes.header);
    const [titleText] = useState("Modern Walk");

    const goToHome = () => {
        // redirect to the home page
        navigate("/");
    }

    return (
        <div data-testid="header" className='header'>
            <div data-testid="headerTitle" className='title' onClick={goToHome}>
                <Label type={labelType} text={titleText}/>
            </div>
        </div>
    )
}

export default Header;