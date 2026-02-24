import Text "mo:core/Text";
import List "mo:core/List";

actor {
  public type Dealer = {
    name : Text;
    city : Text;
    state : Text;
    address : Text;
    phone : Text;
  };

  public type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
  };

  let dealers = List.fromArray<Dealer>([
    {
      name = "AutoMax";
      city = "Dallas";
      state = "Texas";
      address = "1234 Main St, Dallas, TX";
      phone = "555-1234";
    },
    {
      name = "Cars Plus";
      city = "Houston";
      state = "Texas";
      address = "4321 Elm St, Houston, TX";
      phone = "555-4321";
    },
    {
      name = "Budget Dealers";
      city = "Los Angeles";
      state = "California";
      address = "5678 Oak St, Los Angeles, CA";
      phone = "555-5678";
    },
    {
      name = "Premium Autos";
      city = "San Francisco";
      state = "California";
      address = "8765 Pine St, San Francisco, CA";
      phone = "555-8765";
    },
  ]);

  let inquiries = List.empty<Inquiry>();

  public query ({ caller }) func getDealersByCity(city : Text) : async [Dealer] {
    let filtered = dealers.filter(
      func(dealer) {
        Text.equal(dealer.city, city);
      }
    );
    filtered.toArray();
  };

  public query ({ caller }) func getDealersByState(state : Text) : async [Dealer] {
    let filtered = dealers.filter(
      func(dealer) {
        Text.equal(dealer.state, state);
      }
    );
    filtered.toArray();
  };

  public shared ({ caller }) func submitInquiry(inquiry : Inquiry) : async Bool {
    inquiries.add(inquiry);
    true;
  };

  public query ({ caller }) func getAllDealers() : async [Dealer] {
    dealers.toArray();
  };
};
