import { motion } from 'framer-motion'

export default function Card({ children, as: As = 'div', hover = true, ...rest }) {
  return (
    <motion.div
      className="card card--modern"
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}


