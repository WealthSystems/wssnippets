<Bx.Card>
    <Bx.Card.Header title="${1:Title}" 
        subTitle="${2:SubTitle}" 
        avatar={
        <Bx.Avatar size="lg">
            <img src="$3">
        </Bx.Avatar>} 
        overflowMenu={
            <Bx.OverflowMenu>
                <Bx.ListView>
                    <Bx.ListItem>
                        <Bx.ListItem.Content>
                            <Bx.ListItem.Title>menu entry...</Bx.ListItem.Title>
                        </Bx.ListItem.Content>
                    </Bx.ListItem>
                    <Bx.ListItem>
                        <Bx.ListItem.Content>
                            <Bx.ListItem.Title>menu entry...</Bx.ListItem.Title>
                        </Bx.ListItem.Content>
                    </Bx.ListItem>
                </Bx.ListView>
            </Bx.OverflowMenu>
        }  />
        <Bx.Card.Content>
            Sample content...
        </Bx.Card.Content>
        <Bx.Card.Actions>
            <Bx.Button primary>
                ${4:OK}
            </Bx.Button>
            <Bx.Button accent flat>
                ${5:Cancel}
            </Bx.Button>
        </Bx.Card.Actions>
</Bx.Card>