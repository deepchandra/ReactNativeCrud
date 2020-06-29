import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import {Drawer, Card, CardItem, Button, Icon} from 'native-base';
import SideMenu from '@Screens/SideMenu';
import styles from './styles';
import Header from '@Components/Header';
import Common from '@Common';
import FormModal from '@Components/FormModal';

const {commonStyle} = Common;
const initialState = {
  contactList: [],
  isOpenContactForm: false,
  selectedCard: null,
  name: '',
  age: '',
  mobile: '',
};

function Home(props) {
  var drawer = {};
  const [state, onChangeState] = useState(initialState);
  const {
    contactList,
    isOpenContactForm,
    selectedCard,
    name,
    age,
    mobile,
  } = state;
  /** *********Close side meny drawer*********** */
  const closeDrawer = () => {
    drawer._root.close();
  };

  /** *******Open side menu drawer********* */
  const openDrawer = () => {
    drawer._root.open();
  };

  const onAddEditContact = () => {
    if (name && age && mobile) {
      let contact = {
        name: name,
        age: age,
        mobile: mobile,
      };
      if (selectedCard || selectedCard === 0) {
        contactList[selectedCard] = contact;
        onChangeState({
          ...state,
          contactList,
        });
      } else {
        contactList.push(contact);
        onChangeState({
          ...state,
          contactList,
        });
      }
      onChangeState({
        ...state,
        name: '',
        age: '',
        mobile: '',
        isOpenContactForm: false,
        selectedCard: null,
      });
    }
  };

  const onPressEdit = (index) => {
    onChangeState({
      ...state,
      name: contactList[index].name,
      age: contactList[index].age,
      mobile: contactList[index].mobile,
      isOpenContactForm: true,
      selectedCard: index,
    });
  };

  const onPressCancel = () => {
    onChangeState({
      ...state,
      name: "",
      age: "",
      mobile: "",
      isOpenContactForm: false,
      selectedCard: null,
    });
  };

  const onDelete = (selectedIndex) => {
    let newList = contactList.filter((item, index) => index !== selectedIndex);
    onChangeState({
      ...state,
      contactList: newList,
    });
  };

  const onChangeText = (text, name) => {
    onChangeState({...state, [name]: text});
  };

  const renderCard = (item, index) => {
    const {name, age, mobile} = item;
    return (
      <Card style={styles.contactCard}>
        <CardItem style={{justifyContent: 'space-between'}}>
          <Text style={{flex: 8}}>Name: {name}</Text>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => onPressEdit(index)}>
              <Icon
                name="edit"
                type="AntDesign"
                style={{fontSize: 18, color: Common.appColor}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(index)}>
              <Icon
                name="delete"
                type="AntDesign"
                style={{fontSize: 18, color: Common.appColor}}
              />
            </TouchableOpacity>
          </View>
        </CardItem>
        <CardItem>
          <Text>Age: {age}</Text>
        </CardItem>
        <CardItem>
          <Text>Mobile: {mobile}</Text>
        </CardItem>
      </Card>
    );
  };

  return (
    <Drawer
      type="displace"
      ref={(ref) => {
        drawer = ref;
      }}
      content={<SideMenu {...props} onClose={closeDrawer} />}
      onClose={() => closeDrawer()}>
      <View style={styles.container}>
        <Header icon="bars" iconType="AntDesign" onClickLeftIcon={openDrawer} />
        <View style={styles.bodyWrapper}>
          <Button
            bordered
            danger
            style={styles.addNewBtn}
            onPress={() => onChangeState({...state, isOpenContactForm: true})}>
            <Text style={{color: Common.appColor}}>Add New Contact +</Text>
          </Button>
          {Array.isArray(contactList) && contactList.length ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={contactList}
              renderItem={({item, index}) => renderCard(item, index)}
              keyExtractor={({}, index) => index.toString()}
              extraData={state}
            />
          ) : (
            <Text style={commonStyle.noRecordText}>No Contact Found</Text>
          )}
        </View>
      </View>
      <FormModal modalVisible={isOpenContactForm}>
        <Card
          style={{width: '100%', paddingVertical: 20, paddingHorizontal: 10}}>
          <View style={styles.inputWrapper}>
            <Text style={styles.lebel}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              autoCapitalize="none"
              value={name}
              onChangeText={(text) => onChangeText(text, 'name')}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.lebel}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter age"
              autoCapitalize="none"
              value={age}
              onChangeText={(text) => onChangeText(text, 'age')}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.lebel}>Mobile</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter mobile"
              autoCapitalize="none"
              value={mobile}
              onChangeText={(text) => onChangeText(text, 'mobile')}
              keyboardType="numeric"
            />
          </View>
          <CardItem style={{justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={onAddEditContact}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressCancel}
              style={styles.cancelBtn}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      </FormModal>
    </Drawer>
  );
}

export default Home;
