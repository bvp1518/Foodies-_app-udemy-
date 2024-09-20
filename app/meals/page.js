import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals(){
    const meals = await getMeals();

    return <MealsGrid meals={meals}/>
}

export default function MealsPages() {

    return (
        <>
            <header className={classes.header}>
                <h1 className={classes.title}>
                    Delicious meals,created{' '}
                    <span className={classes.highlight}>by you</span>
                    <main className={classes.main}></main>
                </h1>
                <p>Choose your favourite recipe and cook it yourself.It is easy and fun!</p>
                <p className={classes.cta}>
                <Link href="/meals/share">
                  share you favourite recipe
                </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                <Meals />
                </Suspense>
            </main>
        </>
    )
}