import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const KitchenList = () => {

    let [tableHead, setTableHead] = useState(['Head1', 'Head2', 'Head3', 'Head4']);
    let [loading, setIsLoading] = useState(false);
    let [widthArr, setWidthArr] = useState([70, 70, 70, 100]);
    let [tableData, setTableData] = useState([
        ['1', '2', '3', '4',],
        ['a', 'b', 'c', 'd',],
        ['1', '2', '3', '4',],
        ['a', 'b', 'c', 'd',],
        ['a', 'b', 'c', 'd',],
        ['a', 'b', 'c', 'd',],
        ['a', 'b', 'c', 'd',],
        ['1', '2', '3', '4',],
        ['a', 'b', 'c', 'd',],
        ['1', '2', '3', '4',],
        ['a', 'b', 'c', 'd',],
        ['a', 'b', 'c', 'd',],
        ['a', 'b', 'c', 'd',],
        ['a', 'b', 'c', 'd',],
        ['1', '2', '3', '4',],
        ['a', 'b', 'c', 'd',],
        ['1', '2', '3', '4',],
        ['a', 'b', 'c', 'd',],
        ['a', 'b', 'c', 'd',],
        ['a', 'b', 'c', 'd',],
        ['a', 'b', 'c', 'd',]
    ])

    const alertIndex = (index) => {
        Alert.alert(`This is row ${index + 1}`);
    }

    const onMomentumScrollEnd = (event) => {
        setIsLoading(true)
        console.log("onMomentumScrollEnd reach")
    }

    const element = (data, index) => (
        <TouchableOpacity onPress={() => alertIndex(index)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>button</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            {loading === true && <ActivityIndicator size="large" />}
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={tableHead}
                            widthArr={widthArr}
                            style={styles.header} textStyle={styles.text} />
                    </Table>
                    <ScrollView style={styles.dataWrapper} onMomentumScrollEnd={(event) => onMomentumScrollEnd(event)}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            {
                                tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.row}>
                                        {
                                            rowData.map((cellData, cellIndex) => (
                                                <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                            ))
                                        }
                                    </TableWrapper>
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
});

export default KitchenList