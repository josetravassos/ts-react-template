import React from 'react'
import Container from '../components/Container'
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../lib/animations';

const About = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <Container>
                <div className="zsg-inner-section"><motion.h1 variants={titleAnimation}>About</motion.h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet risus a turpis sagittis convallis. Suspendisse condimentum nunc ut convallis ornare. Ut molestie tellus id massa porttitor sagittis. Fusce imperdiet velit et metus mattis, sed efficitur odio eleifend. Pellentesque sit amet eros sed tellus tempor gravida eu et risus. Praesent non cursus arcu, quis efficitur erat. Sed vel venenatis nisi. Sed posuere, lacus vel facilisis pretium, augue leo egestas eros, id vehicula quam nibh sed mauris. Praesent vulputate tellus nibh, non faucibus lacus laoreet posuere.</p>
                        <p>Praesent at justo vehicula, fringilla est ut, porta nunc. Proin vel velit ut purus hendrerit viverra. Cras vel odio urna. Donec convallis, ex et placerat viverra, sapien magna aliquet neque, in blandit augue purus sit amet magna. Cras nisi neque, placerat in consectetur ut, semper ac purus. Pellentesque semper diam massa. Proin pharetra vel orci vel convallis. Sed dictum lectus sed sem bibendum lacinia. Vivamus gravida tortor nec magna bibendum aliquet. Curabitur ac consequat velit.</p>

                        <p>In dictum, elit ac tristique finibus, odio lacus mattis odio, quis viverra neque justo non felis. Suspendisse interdum urna sed nisi facilisis, eu semper mauris fermentum. Suspendisse sagittis iaculis rutrum. Pellentesque hendrerit rhoncus porta. Proin consequat lacus a auctor fermentum. Sed ac neque dictum, sodales sem ac, consectetur libero. Praesent sapien felis, auctor sed sapien non, ornare sodales risus. Pellentesque tincidunt lectus pharetra nisl ullamcorper, ac feugiat lorem facilisis. Ut mattis dignissim mauris eu luctus. In leo massa, dictum vel mauris vitae, tincidunt tempor nulla. In gravida molestie nibh non feugiat. Nulla posuere imperdiet leo, vitae feugiat lacus convallis eu. Nunc tincidunt, lacus et posuere gravida, augue dui dictum urna, vitae condimentum est diam eu purus. Aenean finibus, nunc eget laoreet ultricies, ipsum orci interdum lectus, at feugiat eros nisl a turpis. Curabitur accumsan mauris at enim sollicitudin egestas.</p>
                    </div></div>
            </Container>
        </motion.div>
    )
}



export default About
