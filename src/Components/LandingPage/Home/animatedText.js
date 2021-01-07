import { useSpring, animated } from 'react-spring';
import classes from "./Home.module.css";

export default function AnimatedText() {
    const props = useSpring({ opacity: 1, marginTop: "0px", from: { opacity: 0, marginTop: "-500px" }, config: { duration:800} })
    return <animated.div style={props}>
        <div className={classes.explainCont}>
            <p className={classes.head}>My Fashion</p>
            <p className={classes.explain}>You dream fashion brand offering latest all the modern clothing products at a single place. Visit our products section to explore more. </p>
            <button className={classes.viewButton}>View Products</button>
        </div>
    </animated.div>
}