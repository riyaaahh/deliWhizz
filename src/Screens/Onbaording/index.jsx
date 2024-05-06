import React, { useState } from 'react'
import Onboarding1 from './Onboarding1'
import Onboarding2 from './Onboarding2/index';
import Onboarding3 from './Onboarding3/index';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const [current, setCurrent] = useState(1)
    const navigate = useNavigate()

    const handleCurrent = (number) => {
        if (number == 2) {
            navigate('/login')
        } else {
            setCurrent(current + 1)
        }
    }
    if (current == 1) {
        return <Onboarding1
            handleCurrent={handleCurrent}
        />
    } else if (current === 2) {
        return <Onboarding2
            handleCurrent={handleCurrent}

        />
    } else if (current === 3) {
        return <Onboarding3
            handleCurrent={handleCurrent}

        />
    }
}

export default Onboarding