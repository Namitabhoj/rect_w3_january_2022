import React from 'react'
import styles from './Footer.module.css'

class Footer extends React.Component {
    render () {
        return <footer>{this.props.authorName}</footer>
    }
}

export default Footer
