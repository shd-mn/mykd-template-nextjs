import React from 'react';
import { cardData } from './data/cardData';
import Card from '@/components/UI/Card';

export default function Cards() {
    return (
        <section className='py-[100px]'>
            <div className="max-w-[1624px] mx-auto gap-7 px-8 flex justify-between">
                {cardData.map((item, idx) => (
                    <Card key={idx} data={item} />
                ))}
            </div>
        </section>
    );
}
