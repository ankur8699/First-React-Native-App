




import React ,{useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
} from 'react-native';

const Modals=()=>{
    <View>
                <Modal 
                transparent={true}
                visible={modalVisible}
                >
                <View style={{backgroundColor:'#000000aa', flex:1}}>
                <View style={{marginLeft:360}}><Icon 
                    name="ios-close-circle" 
                    color='#fff'
                    size={50}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    /></View>
                   <View style={{backgroundColor:'#fff',padding:40,margin:40,flex:1,borderRadius:10}}>
                   <ScrollView>
                       <Text style={{padding:10,fontSize:20}}>RETURN POLICY</Text>
                       <Text>From the perspective of the customer, the delivery 
                           policy may be the most important legal document on a website. 
                            It should answer questions that are of keen interest
                             to all customers: by what means will my goods be delivered? 
                              When will they be delivered?  Do I have to sign for delivery? 
                               Will I have to take a day off work?  And how much will it all cost?
                               {'\n'}{'\n'}
                               (1) A separate policy? The first question to ask yourself is 
                               whether the delivery policy should be part of the T&Cs of sale, 
                               or a separate document.Because it is one of the few sections 
                               of the T&Cs that customers may want to read, I normally 
                               advise keeping it separate from the rest of the T&Cs. 
                               However, if you're trying to keep your legal documentation
                                to a minimum, then it's perfectly acceptable for the policy 
                                to form a section of the T&Cs.{'\n'}{'\n'}
                                (2) Legal enforceabilityAnother question to address
                                 before you start work on the policy is this: will the
                                  policy create legally enforceable rights and obligations?
                                  The answer to this depends in large part upon whether 
                                  obligations and liabilities concerning problem deliveries are set out 
                                  in the T&Cs or the delivery policy.
                                  If you decide that it should, and delivery policy is a
                                  separate document, the policy should be incorporated into 
                                  the contract of sale through the T&Cs of sale.  
                                  You'll need to check and amend the T&Cs to ensure that 
                                  this is done (and don't forget to check any entire 
                                  agreement clause).
                        </Text>
                        </ScrollView>
                   </View>
                </View>
                </Modal>
            </View>
}
