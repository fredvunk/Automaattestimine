function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.protoype.getInitialContacts = function(cb) {
    var self = this;

    setTimeout(function(){
        self.intialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}