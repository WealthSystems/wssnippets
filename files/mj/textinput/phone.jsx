<TextInput
    label={Lion.getMessage('phone::phone')}
    value={item.phoneNumber}
    onChangeText={this.handleChange.phoneNumber}
    maxLength={phoneMaxLength}
    keyboardType="numeric"
    error={error.phoneNumber}
    required />