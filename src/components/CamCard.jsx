import React from 'react';

import { Card, Icon, Embed } from 'semantic-ui-react';

const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey'];

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

export default props => (
    <Card color={ getRandomColor() } fluid>
        <Card.Content style={{ margin: 0, padding: 0 }}>
            <Card.Header style={{ padding: 15 }}>
                { props.model }

                <div style={{ float: 'right' }}>
                    <Icon name='close' className='button' onClick={ () => { props.onClose(props.model) } } />
                    <Icon name='expand arrows alternate' className='button' onClick={ () => { props.onExpand(props.model) } } />
                </div>
            </Card.Header>

            <Card.Description style={{ margin: 0, padding: 0 }}>
                <Embed active={true} url={ `https://chaturbate.com/in/?track=embed&tour=dU9X&campaign=zVn1b&signup_notice=0&b=${ props.model }&disable_sound=1&mobileRedirect=never` } />
            </Card.Description>
        </Card.Content>
    </Card>
)