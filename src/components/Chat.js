import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { useContext, useState } from "react";
import { Context } from "../index";
import { Container, Grid, TextField, Button, Avatar } from "@mui/material";
import Loader from "./Loader";

const Chat = () => {
    const { auth, firestore, firebase } = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const [value, setValue] = useState('')

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50, marginTop: 20 }}
                justifyContent="center"
            >
                <div style={{ width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto' }}>
                    {messages.map((msg, i) =>
                        <div key={i} style={{
                            margin: 10,
                            border: user.uid === msg.uid ? '2px solid green' : '2px dashed red',
                            marginLeft: user.uid === msg.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5
                        }}>
                            <Grid container>
                                <Avatar src={msg.photoURL}></Avatar>
                                <div>{msg.displayName}</div>
                            </Grid>
                            <div>{msg.text}</div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{ width: '80%' }}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        maxRows={2}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button onClick={sendMessage} variant="outlined">Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Chat;