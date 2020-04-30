import React, { useState } from 'react';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { setGameWinner } from "../State/Actions/App/index"
interface IProps {
    text: string
}

const DialogBox: React.FunctionComponent<IProps> = ({ text }) => {
    const [dialogVisable, setDialogVisibility] = useState(true)
    const dispatch: Dispatch = useDispatch();
    return (
        <Portal>
            <Dialog
                visible={dialogVisable}
                onDismiss={() => {
                    setDialogVisibility(false)
                    dispatch(setGameWinner(0))
                }}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{text}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => {
                        setDialogVisibility(false)
                        dispatch(setGameWinner(0))
                    }}>Confirm</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}

export default DialogBox