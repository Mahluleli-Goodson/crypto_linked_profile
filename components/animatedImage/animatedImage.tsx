import React, {FC} from 'react';
import Image from 'next/image'

const AnimatedImage: FC<{ className: string }> = ({className}) => {
    return (
        <div className={className}>
            <Image src="/assets/geek.svg" alt="geek-image" layout="responsive" width={500} height={500}/>
        </div>
    );
};

export default AnimatedImage;
