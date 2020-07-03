import React, { useState, useEffect, } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import axios from "axios";
import * as Api from "./../../../../config/config"
import { capitalize } from "./../Common/Utils"

const perPage = 20;
const KitchenList = () => {

    let [tableHead, setTableHead] = useState(['Kitchen Name', 'City', 'Email', 'Status']);
    let [loading, setIsLoading] = useState(false);
    let [widthArr, setWidthArr] = useState([100, 70, 100, 70]);
    let [tableData, setTableData] = useState([])
    let [offset, setOffset] = useState(0)
    let [totalPage, setTotalPage] = useState([])
    let [scrollEnabled, setScrollEnabled] = useState(true)



    const alertIndex = (index) => {
        Alert.alert(`This is row ${index + 1}`);
    }

    const onMomentumScrollEnd = (event) => {
        setIsLoading(true)
        getKitchenList();
        setOffset(offset + 1)

        console.log(totalPage, "onMomentumScrollEnd reach", offset)



    }

    useEffect(async () => {

        setIsLoading(true)
        getKitchenList();

        return unsubscribe
    }, [])

    const getKitchenList = async () => {
        //console.log("coming", 1);
        try {
            console.log(offset);

            const productList = await axios.get(
                Api.KITCHEN_LIST_API, {
                params: {
                    skip: offset
                }
            },
                {
                    headers: {
                        "Authorization": `${Api.BEARER}`
                    }
                }).then(res => {
                    //console.log("---->>>>>>>>>>>>>", JSON.stringify(res.data))

                    let totalResult = res.data.kitchen_count !== undefined && res.data.kitchen_count

                    let totalPage = Math.ceil(totalResult / perPage)


                    let results = res.data.result !== undefined && res.data.result.map((kitchen, index) => {
                        return [capitalize(kitchen.kitchen_name), capitalize(kitchen.city), kitchen.email, kitchen.status]

                    })
                    setIsLoading(false)
                    setTableData(results)
                    setTotalPage(totalPage)
                }
                );

        } catch (error) {
            console.log("error", error);
            setIsLoading(false)
        }
    }


    const element = (data, index) => (
        <TouchableOpacity onPress={() => alertIndex(index)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>Button</Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            {loading === true && <ActivityIndicator
                animating={loading}
                color="#252051"
                size="large"
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />}
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={tableHead} widthArr={widthArr}
                            style={styles.header} textStyle={styles.text} />
                    </Table>
                    <ScrollView style={styles.dataWrapper} onMomentumScrollEnd={(event) => onMomentumScrollEnd(event)}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            {
                                tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.row}>
                                        {
                                            rowData.map((cellData, cellIndex) => {

                                                return (
                                                    <Cell style={{
                                                        width: cellIndex === 0 ? 100
                                                            : cellIndex === 1 ? 70
                                                                : cellIndex === 2 ? 100
                                                                    : 70
                                                    }}
                                                        key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                                )
                                            })
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
    btn: { width: 50, height: 18, backgroundColor: '#78B7BB', borderRadius: 2, marginLeft: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});

export default KitchenList